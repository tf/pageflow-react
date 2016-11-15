export default function prettyPrintEffect(effect) {
  if (effect.SELECT) {
    return `select(${functionName(effect.SELECT)})`;
  }
  else if (effect.CALL) {
    return `call(${functionName(effect.CALL)})`;
  }
  else if (effect.TAKE) {
    return `take(${JSON.stringify(effect.TAKE)})`;
  }
  else if (effect.CPS) {
    return `cps(${functionName(effect.CPS)})`;
  }
  else if (effect.PUT) {
    return `put(${JSON.stringify(effect.PUT.action)})`;
  }
  else {
    return 'effect';
  }
}

function functionName(effect) {
  var fun = effect.fn || effect.selector;

  if (!fun) {
    throw new Error(`Could not determine function for effect ${JSON.stringify(effect)}`);
  }

  var ret = fun.toString();

  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));

  const args = effect.args.map(arg =>
    `, ${JSON.stringify(arg)}`
  ).join('');

  return `${ret}${args}`;
}

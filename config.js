fetch("URL_WEBAPP_APPSCRIPT_KAMU")
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(e => console.error(e));

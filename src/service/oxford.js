const OXFORD_API =
  "https://od-api.oxforddictionaries.com:443/api/v1/entries/en";
const OXFORD_APP_ID = "fee2c62c";
const OXFORD_APP_KEY = "4dc5d712b82bad6ced245bf35fb27118";
async function getEnFromOxford(word) {
  const ukDefinition = await getUKDefinition(word);
  const usDefinition = await getUSDefinition(word);
  return {
    gb: ukDefinition,
    us: ukDefinition
  };
}

async function getUKDefinition(word) {
  const response = await fetch(`${OXFORD_API}/${word}/regions=gb`, {
    headers: {
      Accept: "application/json",
      app_id: OXFORD_APP_ID,
      app_key: OXFORD_APP_KEY
    }
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return null;
}

async function getUSDefinition(word) {
  const response = await fetch(`${OXFORD_API}/${word}/regions=us`, {
    headers: {
      Accept: "application/json",
      app_id: OXFORD_APP_ID,
      app_key: OXFORD_APP_KEY
    }
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return null;
}

module.exports = getEnFromOxford;

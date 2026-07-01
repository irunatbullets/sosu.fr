import express from "express";

const app = express();

const {
  DIRECTUS_URL,
} = process.env;

// shared function
async function getPortfolioFile() {
  const res = await fetch(
    `${DIRECTUS_URL}/items/global?fields=portfolio`
  );

  const json = await res.json();
  return json.data?.portfolio;
}

// root route
app.get("/", async (req, res) => {
  const file = await getPortfolioFile();
  if (!file) return res.status(404).send("No portfolio");
  res.redirect(`${DIRECTUS_URL}/assets/${file}`);
});

// explicit portfolio route
app.get("/portfolio", async (req, res) => {
  const file = await getPortfolioFile();
  if (!file) return res.status(404).send("No portfolio");
  res.redirect(`${DIRECTUS_URL}/assets/${file}`);
});

app.listen(3000);


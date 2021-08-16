const { Client } = require("@notionhq/client");

export default async (req, res) => {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const links = await notion.databases.query({
    database_id: process.env.LINKS_DB,
  });

  res.statusCode = 200;
  res.json({
    results: links.results,
  });
};

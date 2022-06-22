const { Client } = require("@notionhq/client");

const getNotionLinks = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=864000");
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

export default getNotionLinks;

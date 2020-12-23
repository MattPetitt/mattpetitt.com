export default (req, res) => {
  res.statusCode = 200;
  res.json({
    name: "Matt Petitt",
    title: "Front-End Engineer",
    employer: "AWS",
    email: "matt@petitt.io",
    phone: "703-678-6047",
  });
};

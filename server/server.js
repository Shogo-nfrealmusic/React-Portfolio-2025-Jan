// server.js (ES Modules)
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const items = [
    {
        link: "https://www.univ.gakushuin.ac.jp/",
        title: "Gakushuin University(Japan)",
        description: "LAW FACULTY (BACHELOR)",
      },
      {
        link: "https://seattlecentral.edu/",
        title: "Seattle Central College(Seattle, WA)",
        description: "COMPUTER SCIENCE (1 YEAR STUDY ABROAD)",
      },
      {
        link: "https://www.u-tokyo.ac.jp/en/",
        title: "Tokyo University(Japan)",
        description: "BUSINESS & AI (3 MOTHS PROGRAM)",
      },
      {
        link: "https://hatenabase.jp/",
        title: "Full Stack Software Engineer Intern",
        description: "Worked extensively in development, debugging, testing, etc.",
      },
      {
        link: "https://www.instagram.com/growth.withlucas/",
        title: "SNS Operation",
        description:
          "Runs an account with 11k followers. Performs data analysis, video editing, and digital product creation.",
      },
      {
        link: "https://www.tradingview.com/",
        title: "Investing in crypto",
        description:
          "Invest in crypto and have a passion for web3 and blockchain。",
      },
];

app.get("/api/items", (req, res) => {
    res.json(items);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


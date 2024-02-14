const cheerio = require("cheerio");
const axios = require("axios");

// url ที่ต้องการทำ scraping
const url = "https://example.com";

// ใช้ axios ดึง HTML  จาก url
axios
  .get(url)
  .then((response) => {
    //เก็บ HTML จาก response
    const html = response.data;

    //ใช้ API cheerio เพื่อโหลด HTML
    const load = cheerio.load(html);
    // เลือกข้อมูลที่ต้องการจาก HTML โดยใช้ CSS selector
    const title = load("title").text();
    const p = [];
    load("p").each((index, element) => {
      p.push(load(element).text());
    });

    //แสดงผลลัพธ์
    console.log("Title:", title);
    console.log("P", p);
  })
  .catch((error) => {
    console.log("Error fetching page", error);
  });

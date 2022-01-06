let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: ['description'],
  }
});

(async () => {

  let feed = await parser.parseURL('https://www.mygingergarlickitchen.com/index.xml');
  console.log(feed.title);
    let count=0
  feed.items.forEach(item => {
    count++ ; 
    console.log(count + ' =========================') ;
    console.log('TITLE: ' + item.title) ;
    console.log('LINK: ' + item.link) ;
    console.log('PUB_DATE: ' + item.pubDate) ;
    console.log('DESCRIPTION: ' + item.description) ;
  });

})();
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db= new pg.Client({
      user: "postgres",
      host: "localhost",
      database: "Permalist",
      password: "ArinGupta",
      port: 5432,
});
const app = express();
const port = 3000;
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function itemID()
{
  const data= await db.query("SELECT * FROM items");
  const request=data.rows;
  console.log(request.length);
  return request.length;
}

app.get("/", async(req, res) => {
  try{
  const data= await db.query("SELECT * FROM items ORDER BY id ASC");
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: data.rows,
  });
}
catch(err)
{
  req.status('404').send("Error Occured");
 console.log('Error Occured');
}
});

app.post("/add", async(req, res) => {
  let item_id= await itemID();
  const item = req.body.newItem;
  await db.query("INSERT INTO items VALUES($1,$2)",[item_id+1,item])
  items.push({ 
    id: item_id+1,
    title: item 
  });
  
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  const requestID= req.body.updatedItemId;
  const requestItem= req.body.updatedItemTitle;
  await db.query("UPDATE items SET title=$1 WHERE id=$2",[requestItem,requestID])
  res.redirect('/');
});

app.post("/delete", async(req, res) => {
  
  const requestID= req.body.deleteItemId;
await db.query("DELETE FROM items where id=$1",[requestID]);

res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

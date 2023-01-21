const express= require('express');
const bodyParser= require('body-parser');
const app= express();
const port= 3000;
const ejs= require('ejs');
const mongoose= require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology: true});
const articleSchema= {
	title: String,
	content: String
};
const Article= mongoose.model('Article', articleSchema);
app.route('/articles')

.get((req, res) => {
	Article.find({}, (err, foundArticles) => {
		if(!err){
			res.send(foundArticles);
		}
		else{
			res.send("error @ Article.find(): "+err);
		}
	}
	);
})
.post((req, res) => {
	const newArticle= new Article({
		title: req.body.title,
		content: req.body.content
	});
	newArticle.save((err) => {
		if(!err){
			res.send("Successfully added new article");
		}
		else{
			res.send("error @ newArticle.save(): "+err);
		}
	})
})

.delete((req, res)=>{
	Article.deleteMany((err)=>{
		if(!err){
			res.send("Successfully deleted all articles");
		}
		else{
			res.send("error @ Article.deleteMany(): "+err);
		}
	});
});

app.route('/articles/:articleTitle')
.get((req, res)=>{
	Article.findOne({title: req.params.articleTitle}, (err, foundArticle)=>{
		if(foundArticle){
			res.send(foundArticle);
		}
		else{
			res.send("No articles matching that title was found");
		}
	});
})
.put((req, res)=>{
	Article.update(
		{title: req.params.articleTitle},
		{$set:  {title: req.body.title, content: req.body.content}},
		{overwrite: true},
		(err)=>{
			if(!err)
				res.send("Succesfully updated");
			else res.send('something wrong in put method: '+ err);
		}
	);
})
.patch((req, res)=>{
	Article.update(
		{title: req.params.articleTitle},
		{$set: req.body},
		(err)=>{
			if(!err)
				res.send("Succesfully updated");
			else res.send('something wrong in patch method: '+ err);
		}
	);
});
app.listen(port, () => {
	console.log('Server is running on port 3000');
}
);


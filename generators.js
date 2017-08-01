class Comment {
	constructor(content, children){
    	this.content = content;
      	this.children = children;
    }
  
  	*[Symbol.iterator](){
    	yield this.content;
      	for (let child of this.children) {
        	yield* child;
        }
    }
}

const children = [
  new Comment('good',[]),
  new Comment('bad comment',[]),
  new Comment('awesome comment',[])
]

const tree = new Comment('Great post', children);

const values=[]
for (let value of tree){
   values.push(value)
}

console.log(values)

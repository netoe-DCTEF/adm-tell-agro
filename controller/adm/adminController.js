class Get{
    abreadd(req,res){
        res.render('adm/add.ejs');
    }

    abreedt(req,res){
        res.render('adm/edt.ejs');
    }

    abrelst(req,res){
        res.render('adm/lst.ejs');
    }

    deleta(req,res){
        res.render('adm/del.ejs');
    }
    
}

class Post{
    add(req,res){
       
    }

    edt(req,res){
     
    }

    lst(req,res){
      
    }

}


let get = new Get();
let post = new Post();

module.exports = {get,post};
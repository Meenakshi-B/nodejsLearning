var people_model=require.(././"people_model");
 module.exports.create_people = function (create_people, callback) {
     var peopledata = new people_model(create_people);
     console.log("student dao", peopledata);
     studentdata.save(function (err) {
         if (err) {
             callback(err);
         } else {console.log("no err");}
          console.log(peopledata)
         callback(peopledata);
		 
	 })
 }
 
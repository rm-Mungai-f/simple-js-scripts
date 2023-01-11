// const cars=['Audi','Porsche','Bentley','Rolls Royce','BMW']
// mynewcar=cars(0)
// console.log(mynewcar)

// const cars=['Audi','Porsche','Bentley','Rolls Royce','BMW']
// console.log(cars[2])

// person={firstname:'John',lastname:'Oloo',email:'johnoloo@gmail.com'}
// console.log(person['firstname'])

var library=[
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },

    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },

    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

var sort_by = function(field_name, reverse, initial){
    var key=initial ?
        function(x)
            {
                return initial(x[field_name]);
            }:
        function(x)
            {
                return x[field_name];
            }
    reverse=!reverse ? 1:-1;
    
    return function (x,y){
        return x=key(x), y=key(y), reverse*((x>y)-(y>x));
    };
};

var newobj=library.sort(sort_by('libraryID',true,parseInt));
console.log(newobj);

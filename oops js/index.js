class Data
{
    constructor(name,number,post)
    {
        this.name =name;
        this.number =number;
        this.post =post;
    }

    name()
    {
        console.log(`${this.name} name`);
    }
    numbers()
    {
        console.log(`${this.number} number`);
    }
    salary()
    {
        console.log(" Salary 2300000");
    }
    post()
    {
        console.log(`${this.post} post`);
    }
}

class manager extends Data
{
    constructor(name,number,post,leve,lunch,minbreak)
    {
        super(name,number,post,leve,lunch,minbreak);

        this.leve = leve;
        this.lunch = lunch;
        this.minbreak = minbreak;
    } 

    lunch_time()
    {
        if(this.lunch==true)
        {
            console.log("Your Lunch Time");
        }
        else
        {
            console.log("Your Lunch Time Is Over");
        }
    }

    break()
    {
        if(this.minbreak==true)
        {
            console.log("Break Time");
        }
        else
        {
            console.log("Break Time Is Over");
        }
    }
}
let om = new manager("Om",9664636415,"CEO","2 Days",false,true);
console.log(om);
om.salary();
om.lunch_time();

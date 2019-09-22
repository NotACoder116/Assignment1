class Student
{
    constructor(name,roll)
    {
        this.name=name;
        this.roll=roll;
   
    }
    static clg()
    {
        var name="Delta School";
        return name;
    }
}
class MarksPer extends Student
{
    
    constructor(name,roll)
    {

        super(name,roll);
        name=this.name;
        roll=this.roll;
    }
    calGrade(math,english,science)
    {
    var total=300;
    var marksObt=math+english+science;
    var per=(marksObt/total)*100;
    //console.log(per);
    if(per>95) { return 'A+';}
    else if(per>90 && per<=95) { return "A";  }
    else if(per>80 && per<=80) { return "B+"; }
    else if(per>70 && per<=80) { return "B";  }
    else if(per>60 && per<=70) { return "C+"; }
    else {  return "C"; }
    }
    print(grade)
    {
        console.log(`${this.name} having Roll No. ${this.roll} from ${Student.clg()} got ${grade} Grade`);
    }
}
var marks1=new MarksPer("Yadwinder",12);
var marks2=new MarksPer("Daman",1);
var k1=marks1.calGrade(96,98,99);
var k2=marks2.calGrade(87,45,65);
marks1.print(k1);
marks2.print(k2);

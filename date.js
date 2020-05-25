var  days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
//var today=days[day]
var myDate = new Date();
var day=myDate.getDay();
document.write("today is:"+days[day])
//var today=days[day]
var hrs = myDate.getHours();		
var hr=(hrs)%12
var min=myDate.getMinutes()

if(hrs < 12)
    {
        document.write("good morning"+" time is"+hr+":"+min+"A.M")
    }
else if(hrs >= 12 && hrs <= 17)
{
         document.write("good afternoon"+" time is"+hr+":"+min+"P.M")
        
}
 else
{
    
    document.write("good evening"+" time is"+hr+":"+min+"P.M")
}

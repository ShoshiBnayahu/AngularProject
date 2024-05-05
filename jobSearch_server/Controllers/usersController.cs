using Microsoft.AspNetCore.Mvc;
using jobSearch_server.Models;
using System.Text.Json;
using System.IO;
using System.Linq;
namespace usersController.Controllers;

[ApiController]
[Route("users")]
public class usersController : ControllerBase
{

    private IWebHostEnvironment webHost;
    private string usersPath;
    private List<User>? usersList { get; }
    public usersController(IWebHostEnvironment webHost)
    {
        this.webHost = webHost;
        this.usersPath=Path.Combine(webHost.ContentRootPath, "Data", "Users.json");
        using (var jsonFile = System.IO.File.OpenText(usersPath))
        {
            usersList = JsonSerializer.Deserialize<List<User>>(jsonFile.ReadToEnd(),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
    }

    
    [HttpGet("GetUserDetails")]
    public ActionResult GetUser( string userName,string password)
    {      
       
        User? user =usersList?.FirstOrDefault(u=>u?.userName==userName && u?.password==password);
        System.Console.WriteLine( user);
        return Ok(user);

    }
     [HttpGet("GetUserById")]
    public ActionResult GetUser( int id)
    {      
       
        User? user =usersList?.FirstOrDefault(u=>u?.id==id);
        return Ok(user);

    }

    private void saveToFile(){
        System.IO.File.WriteAllText(usersPath,JsonSerializer.Serialize(usersList));
    }


    [HttpPut("updateJobsSentCV")]
    public ActionResult updateJobsSentCV(int id,string jobName )
    {      
        User? user =usersList?.FirstOrDefault(u=>u?.id==id);
       if(user!=null){
        user.jobsSentCV.Add(jobName);
        user.cVsSentsAmount++;
        saveToFile();
       }
        return Ok(user);

    }

   
}


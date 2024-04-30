using Microsoft.AspNetCore.Mvc;
using jobSearch_server.Models;
using System.Text.Json;
using System.IO;
using System.Linq;
namespace jobSearch_server.Controllers;

[ApiController]
[Route("[controller]")]
public class JobSearchServerController : ControllerBase
{

    private IWebHostEnvironment webHost;
    private string jobsPath;
    private List<Job>? jobsList { get; }
    private string usersPath;
    private List<User>? usersList { get; }
    public JobSearchServerController(IWebHostEnvironment webHost)
    {
        this.webHost = webHost;
        this.jobsPath = Path.Combine(webHost.ContentRootPath, "Data", "Jobs.json");
        this.usersPath=Path.Combine(webHost.ContentRootPath, "Data", "Users.json");
        using (var jsonFile =  System.IO.File.OpenText(jobsPath))
        {
            jobsList = JsonSerializer.Deserialize<List<Job>>(jsonFile.ReadToEnd(),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
        using (var jsonFile = System.IO.File.OpenText(usersPath))
        {
            usersList = JsonSerializer.Deserialize<List<User>>(jsonFile.ReadToEnd(),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
        foreach (User item in usersList)
        {
            System.Console.WriteLine(item.ToString());
        }
    }



    [HttpGet("GetAllJobs")]
    public ActionResult GetAllJobs()
    {
        return Ok(jobsList);
    }

    [HttpGet("GetUserDetails")]
    public ActionResult GetUser( string userName,string password)
    {      
       
        User? user =usersList?.FirstOrDefault(u=>u?.userName==userName && u?.password==password);
        System.Console.WriteLine(   user);
        return Ok(user);

    }

   
}


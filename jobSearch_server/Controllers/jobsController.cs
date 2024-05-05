using Microsoft.AspNetCore.Mvc;
using jobSearch_server.Models;
using System.Text.Json;
using System.IO;
using System.Linq;
namespace jobsControllers.Controllers;

[ApiController]
[Route("jobs")]
public class jobsControllers : ControllerBase
{

    private IWebHostEnvironment webHost;
    private string jobsPath;
    private List<Job>? jobsList { get; }
    public jobsControllers(IWebHostEnvironment webHost)
    {
        this.webHost = webHost;
        this.jobsPath = Path.Combine(webHost.ContentRootPath, "Data", "Jobs.json");
        using (var jsonFile =  System.IO.File.OpenText(jobsPath))
        {
            jobsList = JsonSerializer.Deserialize<List<Job>>(jsonFile.ReadToEnd(),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
    }

    // private void saveToFile(){
    //     System.IO.File.WriteAllText(usersPath,JsonSerializer.Serialize(usersList));
    // }

    [HttpGet("GetAllJobs")]
    public ActionResult GetAllJobs()
    {
        return Ok(jobsList);
    }

    [HttpGet("GetJob")]
    public ActionResult GetJob( int id)
    {      
       
        Job? job =jobsList?.FirstOrDefault(j=>j.id == id);  
        System.Console.WriteLine( job);
        return Ok(job);

    }
    [HttpGet("GetAreas")]
        public ActionResult<IEnumerable<string>> GetAreas()
        {
            var areasList = jobsList?.Select(job => job.area).Distinct().ToList();
            return Ok(areasList);
        }


   
}


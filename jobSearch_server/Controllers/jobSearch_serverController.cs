using Microsoft.AspNetCore.Mvc;
using jobSearch_server.Models;
using System.Text.Json;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System;
using System.Text.Json;
using Microsoft.AspNetCore.Hosting;
namespace jobSearch_server.Controllers;

[ApiController]
[Route("[controller]")]
public class jobSearch_serverController : ControllerBase
{
     private IWebHostEnvironment webHost;
    private string filePath;
    private List<Job>? JobsList { get; }

    public jobSearch_serverController(IWebHostEnvironment webHost)
    {
        this.webHost = webHost;
        this.filePath = Path.Combine(webHost.ContentRootPath, "Data", "Jobs.json");
        using (var jsonFile = File.OpenText(filePath))
        {
            JobsList = JsonSerializer.Deserialize<List<Job>>(jsonFile.ReadToEnd(),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
       
    }
          

    [HttpGet(Name = "GetAllJobs")]
    public ActionResult GetAllJobs()
    {
      return Ok(JobsList);
    }


  
}



       
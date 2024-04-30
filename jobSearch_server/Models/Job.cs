namespace jobSearch_server.Models
{
    public class Job
    {
        public int id { get; set; }
        public string jobName { get; set; }
        public Field jobField { get; set; }
        public int scopeOfHours { get; set; }
        public string area { get; set; }
        public string requirements { get; set; }
        public bool workFromHome { get; set; }
    }
}



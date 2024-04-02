namespace jobSearch_server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public Field JobSearchField { get; set; }
         public User(int id, string userName,string password,Field jobSearchField)
    {
        this.Id=id;
        this.UserName=userName;
        this.Password=password;
        this.JobSearchField=jobSearchField;
    }
    
    }
   
    
}
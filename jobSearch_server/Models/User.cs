namespace jobSearch_server.Models
{
    public class User
    {
        public int id { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public Field jobSearchField { get; set; }
        public int cVsSentsAmount { get; set; }
        public List<string> jobsSentCV  { get; set; }

         public User(int id, string userName,string password,Field jobSearchField,int CVsSentsAmount,List<string> jobsSentCV)
    {
        this.id=id;
        this.userName=userName;
        this.password=password;
        this.jobSearchField=jobSearchField;
        this.cVsSentsAmount=CVsSentsAmount;
        this.jobsSentCV=jobsSentCV;
    }
    
    }
   
    
}
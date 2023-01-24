using FakedSmsSending.Models;
using FakedSmsSending.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FakedSmsSending.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SentSmsesController : ControllerBase
    {
        SentSmsesDbContext dbContext;
        public SentSmsesController(SentSmsesDbContext dbContext) => this.dbContext = dbContext;

        [HttpGet]
        public async Task<List<SentSms>> Get()
        {
            return await dbContext.SentSmses.ToListAsync();
        }

        [HttpPost]
        public SentSms Post([FromBody] SmsToSend smsToSend, [FromServices] ISmsSendingService smsSendingService)
        {
            var sentSmsDbEntity = dbContext.SentSmses.Add(smsSendingService.SendSms(smsToSend));
            dbContext.SaveChanges();
            return sentSmsDbEntity.Entity;
        }

#if DEBUG
        [HttpDelete("clear")]
        public void ClearTable()
        {
            dbContext.Database.ExecuteSqlRaw("Truncate table \"SentSmses\"");
        }
#endif
    }
}

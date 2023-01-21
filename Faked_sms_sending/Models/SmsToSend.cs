namespace Faked_sms_sending.Models;

public class SmsToSend
{
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public string Text { get; init; }
    public string ReceiverPhoneNo { get; init; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public string? SenderName { get; init; }
}

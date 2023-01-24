using System.ComponentModel.DataAnnotations;

namespace FakedSmsSending.Models;

public class SmsToSend
{
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    [Required(ErrorMessage = "Текст смс не должен быть пустым.")]
    public string Text { get; init; }
    [Required(ErrorMessage = "Не указан номер телефона получателя.")]
    [RegularExpression("^\\d{11}$", ErrorMessage = "Номер телефона должен состоять из 11 цифр.")]
    public string ReceiverPhoneNo { get; init; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public string? SenderName { get; init; }
}

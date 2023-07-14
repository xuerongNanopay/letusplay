import java.time.*;
import java.util.Calendar;
import java.util.Date;

public class Main {
  public static void main(String[] args) {
    var systemTZ = ZoneId.systemDefault();
    var localTZ = ZoneId.of("America/Toronto");

    System.out.println(systemTZ);
    System.out.println(localTZ);

    // date = cal.getTime();
    // localDate = LocalDateTime.ofInstant(date.toInstant(), systemTZ);
    Calendar cal = Calendar.getInstance();
    System.out.println(cal);
    var date = cal.getTime();
    System.out.println(date);
    // var localDate = LocalDateTime.ofInstant(date.toInstant(), systemTZ);

    //From.
    var localDate = LocalDateTime.now();;
    System.out.println(localDate);

    var startLocalDate = localDate.with(LocalTime.MIN);
    var endLocalDate = localDate.with(LocalTime.MAX);
    System.out.println(startLocalDate);
    System.out.println(endLocalDate);

    var startDate = Date.from(startLocalDate.atZone(localTZ).toInstant());
    var endDate = Date.from(endLocalDate.atZone(localTZ).toInstant());  
    System.out.println(startDate);
    System.out.println(endDate);

    System.out.println(new Date());
    System.out.println(LocalDateTime.now());
    System.out.println(Instant.now());
  }
}
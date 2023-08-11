// Sort Array demo.
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.LongStream;

public class Main {
  public static void main(String[] args) {
    //Initial to all 0.
    long[] longs = new long[10];
    printAll(longs);
    br();

    Arrays.fill(longs, 1L);
    printAll(longs);
    br();

    long[] rangLongs = LongStream.rangeClosed(10, 20).toArray();
    printAll(rangLongs);
    br();

    Long[] rangeBoxLongs = Arrays.stream(rangLongs).boxed().sorted(Collections.reverseOrder()).toArray(Long[]::new);
    printAll(rangeBoxLongs);
    br();

    System.out.println("Is 15 in the array: " + Arrays.binarySearch(rangLongs, 15));
    System.out.println("Is 30 in the array: " + Arrays.binarySearch(rangLongs, 30));
  }

  public static void br() {
    System.out.println();
  }

  public static void printAll(long[] arrs) {
    for ( int i = 0 ; i < arrs.length ; i++ ) {
      System.out.print(arrs[i] + " ");
    }
  }

  public static <T> void printAll(T[] arrs) {
    for ( int i = 0 ; i < arrs.length ; i++ ) {
      System.out.print(arrs[i] + " ");
    }
  }

}

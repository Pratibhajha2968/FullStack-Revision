public class EvenOdd {
    public static void main(String[] args) {
        int arr[] = { 90, 34, 22, 33 };
        int even = arr[0];
        int odd = arr[3];

        for (int num : arr)
            if (num % 2 == 0) {
                System.out.println("even =" + even);
                
            } else {
                System.out.println("odd =" + odd);
                odd++;
            }
    }

}

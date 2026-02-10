public class Min {
    public static void main(String[] args) {
        int arr[] = { 20, 30, 40, 50, 80 };
        int min = arr[0];

        for (int i = 0; i < arr.length; i++)
            if (arr[i] > min) {
                arr[i] = min;
            }
            
            System.out.println("min =" +min);
    }
}
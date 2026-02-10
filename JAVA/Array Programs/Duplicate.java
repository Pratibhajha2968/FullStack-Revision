public class Duplicate {
    public static void main(String[] args) {
        int arr[] = { 11, 23, 23, 45, 87, 96 };
        // int duplicate = arr[0];

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; i++) {
                if (arr[i] == arr[j]) {
                    System.out.println("Duplicate: " + arr[j]);
                }
            }
        }
    }
}

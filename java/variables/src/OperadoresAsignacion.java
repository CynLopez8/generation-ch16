public class OperadoresAsignacion {
    public static void main(String[] args) {
        int i = 5; //asignación directa
        int j = i + 4; //asignación dobre

        System.out.println("i = " + i);
        System.out.println("j = " + j);

        i += 2; // i = i + 2; --> i = 5+2
        System.out.println("i = " + i);
        
        j -=4; // j = j-4
        System.out.println("j = " + j);

        i *= 3;
        System.out.println("i = " + i);
    }
}

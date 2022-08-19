import java.util.Arrays;
import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int i = 5, j = 4, suma = i + j;
        System.out.println("suma = " + suma);

        System.out.println("i + j = " + (i + j));
        System.out.println("i + j = " + i + j);

        int resta = i - j;
        System.out.println("Resta  = " + resta);
        System.out.println("i - j = " + (i - j));

        int multi = i * j;
        System.out.println("Multi Concat = " + multi);
        System.out.println("Multi Simple = " + (i * j));


        
        int div = i / j;
        System.out.println("div = " + div);
        float div1 = (float) i / (float) j;
        System.out.println("div1 = " + div1);
        
        int resto = i % j;
        System.out.println("resto = " + resto);
        
        //float resto1 = (float) i % (float) j;
        System.out.println("resto1 = " + (i % j));


        //CASTEO
        Scanner scanner = new Scanner(System.in);
        System.out.println("Cual es tu nombre: ");
        String dato = scanner.next();
        System.out.println("Mi nombre es: " + dato);

        //PARSEO
        System.out.println("Cual es tu edad:  ");
        String dato2 = scanner.next();
        int edad = Integer.parseInt(dato2);
        System.out.println("Mi edad es: " + edad);

        //OPERADORES DE ASIGNACIÓN



    }
}

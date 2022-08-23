import java.util.Scanner;

public class EjerciciosBucles {
    public static void main(String[] args) {

      /*
            Problema 1
            La salida tiene que ser la siguiente:
            *
            **
            ***
            ****
            *****

            Problema 2
            *****
            ****
            ***
            **
            *

            Problema 3
            Pedirle al usuario la cantidad de estrellitas y la direccion
        */

        System.out.println("Problema 1");

        String texto = "*";
        System.out.println(texto);

        for (int i = 0; i < 4 ; i++) {
            texto = texto + "*";
            System.out.println(texto);
        }

        System.out.println("Problema 2");

        String texto2 = "*****";
        StringBuilder cadena = new StringBuilder(texto2);
        System.out.println(cadena);
        for (byte i = 4;i > 0; i--){
            cadena = cadena.deleteCharAt(i);
            System.out.println(cadena);
        }

        System.out.println("Problema 3");
        System.out.println("Escribe el número de estrellas");
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();

        System.out.println("Escribe la orientación: 1 - De abajo hacia arriba, 2 - De arriba hacia abajo");
        Scanner sc = new Scanner(System.in);
        int orientacion = Integer.parseInt(sc.next());

        switch (num == 1){

        }


    }
}

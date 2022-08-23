import java.util.*;

public class Diccionario {
    public static void main(String[] args) {

        /*
         *  Crear una clase llamada Diccionario
         *  Crear un programa en Java que realice lo siguiente:
         *  Crear un diccionario Español-Inglés, que contenga al menos 20 palabras (con traducción).
         *  Utilizar un objeto HashMap para almacenar los pares de palabras.
         *  Escoger al azar 5 palabras del mini diccionario.
         *  Pedir al usuario que teclee la palabra en inglés y que se imprima la traducción
         *
         *
         *
         * Extra:
         *  Pedir al usuario que teclee la traducción al inglés de cada una de las palabras y comprobará si son correctas.
         *  Al final debe mostrar por consola cuántas respuestas correctas e incorrectas tiene el usuario.

         * */


        System.out.println("--------------");
        System.out.println("Diccionario de Números");

        Map<String, String> diccionario = new HashMap<String,String>();
        diccionario.put("uno", "one");
        diccionario.put("dos", "two");
        diccionario.put("tres", "three");
        diccionario.put("cuatro", "four");
        diccionario.put("cinco", "five");
        diccionario.put("seis", "six");
        diccionario.put("siete", "seven");
        diccionario.put("ocho", "eight");
        diccionario.put("nueve", "nine");
        diccionario.put("diez", "ten");
        diccionario.put("once", "eleven");
        diccionario.put("doce", "twelve");
        diccionario.put("trece", "thirteen");
        diccionario.put("catorce", "fourteen");
        diccionario.put("quince", "fifteen");
        diccionario.put("dieciséis", "sixteen");
        diccionario.put("diecisiete", "seventeen");
        diccionario.put("dieciocho", "eighteen");
        diccionario.put("diecinueve", "nineteen");
        diccionario.put("veinte", "twenty");

        System.out.println("Este diccionario traduce los números del 1 al 20 en inglés a español :)");

        System.out.println("Ingresa la palabra en inglés para traducirla al español: ");
        Scanner sc = new Scanner(System.in);
        String palabraIngles = sc.next();

        for (int i = 0; i < 10 ; i++) {
            Object objetoEspanol = diccionario.keySet().toArray()[i];

            System.out.println(diccionario.get(palabraEspanol));

            if (palabraIngles.equals(palabraEspanol)){
                System.out.println("Tu palabra es: " + palabraIngles);
                palabraEspanol = diccionario.get(i);
                System.out.println("La traducción es: " + palabraEspanol);

            }
        }

    }
}

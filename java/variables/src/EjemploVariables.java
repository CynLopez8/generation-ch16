public class EjemploVariables {
    public static void main(String[] args) {

        //Declaración de variables String y caracter:
        String nombre = "Hugo";
        String saludo = "Hola esto es un ejemplo de variables";
        char espacio = '\u0040';
        char caracter ='a';

        System.out.println("espacio =" + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("Char corresponde en bits: " +Character.SIZE);
        System.out.println("Char valor maximo: " +Character.MAX_VALUE);
        System.out.println("Char valor minimo: " +Character.MIN_VALUE);

        //Declaración de variables numericas:
        int numeroEntero = 2;

        System.out.println("numeroEntero =" + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " +Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        //Declaración de tipo de dato float

        float numeroFloat =1;
        System.out.println("numeroFloat =" + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

        //Declaración de tipo de dato double:
        double numeroDouble = 3.44456E39;
        System.out.println("numeroDouble =" + numeroDouble);
        System.out.println("Double corresponde en byte: " + Double.BYTES);
        System.out.println("Double corresponde en bits: " + Double.SIZE);
        System.out.println("Double valor maximo: " + Double.MAX_VALUE);
        System.out.println("Double valor minimo: " + Double.MIN_VALUE);


        //Declaración de tipo de dato Boolean:
        boolean valorBoolean = (3-2 == 1);
        System.out.println("valorBoolean =" + valorBoolean);
        //System.out.println("Boolean corresponde en byte: " + Boolean.BYTES);
        //System.out.println("Boolean  corresponde en bits: " + Boolean.SIZE);
        //System.out.println("Boolean  valor maximo: " + Boolean.MAX_VALUE);
        //System.out.println("Boolean  valor minimo: " + Boolean.MIN_VALUE);

        //Declaración de tipo de dato Long:
        long valorLong = 0L;
        System.out.println("valorLong =" + valorLong);
        System.out.println("Long corresponde en byte: " + Long.BYTES);
        System.out.println("Long corresponde en bits: " + Long.SIZE);
        System.out.println("Long valor maximo: " + Long.MAX_VALUE);
        System.out.println("Long valor minimo: " + Long.MIN_VALUE);


        //Declaración de tipo de dato Short:
        short valorShort = 0;
        System.out.println("valorShort =" + valorShort);
        System.out.println("Short corresponde en byte: " + Short.BYTES);
        System.out.println("Short corresponde en bits: " + Short.SIZE);
        System.out.println("Short valor maximo: " + Short.MAX_VALUE);
        System.out.println("Short valor minimo: " + Short.MIN_VALUE);

        //Declaración de tipo de dato Byte:
        byte valorByte = 0;
        System.out.println("valorByte =" + valorByte);
        System.out.println("Byte corresponde en byte: " + Byte.BYTES);
        System.out.println("Byte corresponde en bits: " + Byte.SIZE);
        System.out.println("Byte valor maximo: " + Byte.MAX_VALUE);
        System.out.println("Byte valor minimo: " + Byte.MIN_VALUE);

        var miVar = '2';
        System.out.println("miVar = " + miVar);


    }
}



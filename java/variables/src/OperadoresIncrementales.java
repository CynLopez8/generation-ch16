public class OperadoresIncrementales {
    public static void main(String[] args) {

        //PREINCREMENTO
        int i = 1;
        int j = ++i; // i = i+1 -> Primero incrementa y despues asigna

        System.out.println("i = " + i);
        System.out.println("j = " + j);

        //POSTINCREMENTO

        i = 2;
        j = i++;
        System.out.println("i = " + i);
        System.out.println("j = " + j);

        //PREDECREMENTO
        i = 1;
        j = --i;
        System.out.println("i = " + i);
        System.out.println("j = " + j);

        //POSTDECREMENTO
        i = 2;
        j = i--;
        System.out.println("i = " + i);
        System.out.println("j = " + j);

    }
}

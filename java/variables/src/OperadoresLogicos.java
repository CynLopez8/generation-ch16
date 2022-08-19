public class OperadoresLogicos {
    public static void main(String[] args) {
        int i = 3;
        byte j = 3;
        float k = 127e-7f; //le ponemos la f al final para que pueda leer el float
        double l = 2.1415e3d; //igual le ponemos la d al final para indicar que es double
        boolean m = false;
        
        boolean b1 = i == j || m == false;
        System.out.println("b1 = " + b1);
    }
}

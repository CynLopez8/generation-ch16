package MiFecha;

public class EjemploFecha {

    public static void main(String[] args) {
        Fecha f = new Fecha();
        f.setDia(24);
        f.setMes(2);
        f.setAno(1995);

        if (f.getMes() < 10) {
            System.out.println("La fecha es: " + f.getDia() + "/0" + f.getMes() + "/" + f.getAno());
        } else {
            System.out.println("La fecha es: " + f.getDia() + "/" + f.getMes() + "/" + f.getAno());

            System.out.println(f.formaF());
        }
    }
}
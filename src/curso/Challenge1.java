package curso;
import javax.swing.*;
import java.util.ArrayList;
import java.util.Scanner;

public class Challenge1 {

    public static void main(String[] args) {
        String textString = "";
        textString = JOptionPane.showInputDialog("Ingresar cadena de caracter: ");
        System.out.println(metodo1(textString));

            ArrayList<String> listAnimals = new ArrayList<String>();
            listAnimals.add("Micha");
            listAnimals.add("Margarita");
            listAnimals.add("Tocineta");
            listAnimals.add("Tony");
            listAnimals.add("Piña");
            listAnimals.add("A");
            listAnimals.add("B");

            Scanner sc = new Scanner(System.in);
            System.out.println("Digitar nombre de un animal:  ");
            String animal = sc.next();
        System.out.println(metodo2(animal, listAnimals));
    }

        public static String metodo1(String textString){
            String result;
            if (textString.equalsIgnoreCase("A")){
                result = "54";
            } else if (textString.equalsIgnoreCase("B")) {
                result = "08";
            }
            else {
                result = null;
            }

            int[] numbers = new int[8];
            for (int x=0;x<numbers.length;x++){
                numbers[x] = (int) (Math.random()* 10);
                result = result + numbers[x];
            }
            return result;
        }

        public static boolean metodo2(String animal, ArrayList<String> listAnimals) {
            if (listAnimals.contains(animal)){
                return false;
            }else {
                return true;
            }

        }

}

import java.util.HashMap;

public class TrackList {

HashMap<String, String> trackList = new HashMap<String, String>();

public void puttrack(){

trackList.put("title_1", "lyrics 1");
trackList.put("title_2", "lyrics 2");
trackList.put("title_3", "lyrics 3");
trackList.put("title_tit4", "lyrics 4");

}

public String getTrack (String title){
 String lyrics =trackList.get(title);
return lyrics;
}

public void getAll (){
    // this.trackList.puttrack();
Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println(key);
            System.out.println(trackList.get(key));    
        }
// return lyrics;
}
}
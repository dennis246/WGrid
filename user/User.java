package user;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.URI;
import java.net.URL;
import java.net.URLStreamHandler;
import java.net.URLStreamHandlerFactory;
import java.util.HashMap;
import java.util.Map;

import com.sun.net.httpserver.Headers;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

class User implements HttpHandler, URLStreamHandlerFactory {

    private static final int defaultPort = 9349;
    private static final String defaultContext = "/App1";
    private static final String defaultResourcesContext = "/Resources";
    private static String resourcesPath = "";

    public static void main(String[] args) {
        startUserEpoint();
    }

    private static void startUserEpoint() {

        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(defaultPort), 0);
            server.createContext(defaultContext, new User());

            // for (var crow : epointsList) {
            // //server.createContext("/" + crow, new ServerController());
            // }

            server.start();
            System.out.println("User epoint started");

        } catch (Exception e) {
            e.toString();
        }

    }

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        Headers headers = exchange.getRequestHeaders();
        Map<String, Object> requestInfo = new HashMap<>();
        requestInfo.put("exchange", exchange);
        requestInfo.put("URI", exchange.getRequestURI());

        if (exchange.getRequestMethod().equals("GET")) {
            System.out.println("Current Request : GET");
            //processGet(requestInfo);
        }
    }

    @Override
    public URLStreamHandler createURLStreamHandler(String protocol) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createURLStreamHandler'");
    }
}
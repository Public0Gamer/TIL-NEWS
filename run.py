import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}/index.html"
        print("="*60)
        print("  TODAY INDIA LIVE NEWS - Kanpur Web Portal Server")
        print("="*60)
        print(f"  > Server Running at: {url}")
        print(f"  > Admin Desk CMS:    http://localhost:{PORT}/admin.html")
        print(f"  > Press Ctrl+C to stop the server")
        print("="*60)
        
        # Auto-open browser
        try:
            webbrowser.open(url)
        except Exception:
            pass
            
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)

if __name__ == "__main__":
    start_server()

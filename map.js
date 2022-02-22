(() => {
        "use strict";
        var o = {
            d: (e, t) => {
              for (var n in t)
                o.o(t, n) &&
                  !o.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            },
            o: (o, e) => Object.prototype.hasOwnProperty.call(o, e),
            r: (o) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(o, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(o, "__esModule", { value: !0 });
            },
          },
          e = {};
        let t, n;
        function r() {
          (t = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 6,
          })),
            (n = new google.maps.InfoWindow());
          const o = document.createElement("button");
          (o.textContent = "Pan to Current Location"),
            o.classList.add("custom-map-control-button"),
            t.controls[google.maps.ControlPosition.TOP_CENTER].push(o),
            o.addEventListener("click", () => {
              navigator.geolocation
                ? navigator.geolocation.getCurrentPosition(
                    (o) => {
                      const e = {
                        lat: o.coords.latitude,
                        lng: o.coords.longitude
                        ,
                      };
                      n.setPosition(e),
                        n.setContent("Location found."),
                        n.open(t),
                        t.setCenter(e);
                    },
                    () => {
                      i(!0, n, t.getCenter());
                    }
                  )
                : i(!1, n, t.getCenter());
            });
        }
        function i(o, e, n) {
          e.setPosition(n),
            e.setContent(
              o
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
            ),
            e.open(t);
        }
        o.r(e), o.d(e, { initMap: () => r });
        var a = window;
        for (var l in e) a[l] = e[l];
        e.__esModule && Object.defineProperty(a, "__esModule", { value: !0 });
      })();
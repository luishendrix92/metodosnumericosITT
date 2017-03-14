(ns figwheel.connect.dev (:require [sistemaecdos.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/sistemaecdos.core.on-js-reload (apply js/sistemaecdos.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'sistemaecdos.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})


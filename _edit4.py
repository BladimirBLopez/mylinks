path = "components/TiktokerForm.tsx"
content = open(path).read()

old = '''        <div className="space-y-3">
          {links.map((link, i) => (
            <div key={i} className="flex gap-2 items-start bg-gray-800 p-3 rounded-lg">
              <select
                value={link.icono}
                onChange={(e) => actualizarLink(i, "icono", e.target.value)}
                className="px-2 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
              >
                {iconos.map((ic) => (
                  <option key={ic} value={ic}>{ic}</option>
                ))}
              </select>
              <input
                placeholder="Título"
                value={link.titulo}
                onChange={(e) => actualizarLink(i, "titulo", e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
              />
              <input
                placeholder="URL"
                value={link.url}
                onChange={(e) => actualizarLink(i, "url", e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => eliminarLink(i)}
                className="px-2 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm"
              >
                ✕
              </button>
            </div>
          ))}
        </div>'''

new = '''        <div className="space-y-3">
          {links.map((link, i) => (
            <div key={i} className="bg-gray-800 p-3 rounded-lg space-y-2">
              <div className="flex gap-2">
                <select
                  value={link.icono}
                  onChange={(e) => actualizarLink(i, "icono", e.target.value)}
                  className="w-28 shrink-0 px-2 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
                >
                  {iconos.map((ic) => (
                    <option key={ic} value={ic}>{ic}</option>
                  ))}
                </select>
                <input
                  placeholder="Título"
                  value={link.titulo}
                  onChange={(e) => actualizarLink(i, "titulo", e.target.value)}
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => eliminarLink(i)}
                  className="shrink-0 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm"
                >
                  ✕
                </button>
              </div>
              <input
                placeholder="URL"
                value={link.url}
                onChange={(e) => actualizarLink(i, "url", e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
              />
            </div>
          ))}
        </div>'''

assert content.count(old) == 1
content = content.replace(old, new)
open(path, "w").write(content)
print("OK")

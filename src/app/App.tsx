import "./styles/App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CatalogPage } from "@/pages/CatalogPage"
import { CreateProduct } from "@/pages/CreateProductPage"
import { AboutProductPage } from "@/pages/AboutProductPage"
import { Layout } from "@/widgets/Layout"
import { store } from "./store/store"
import { Provider } from "react-redux"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/task-for-alpha/">
          <Layout>
            <Routes>
              <Route path="/" element={<CatalogPage />} />
              <Route
                path="/create-product"
                element={<CreateProduct />}
              />
              <Route
                path="/product/:id"
                element={<AboutProductPage />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

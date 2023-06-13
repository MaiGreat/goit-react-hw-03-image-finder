import React, { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "./servise/api";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoding: false,
    isEmpty: false,
    isVisible: false,
    error: null
  }
  
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImges(query, page);
    }
  }
  
  getImges = async (query, page) => {
    if (!query) {
      return;
    }
    this.setState({ isLoding: true });
    try {
      const { images: result, totalImages } = await fetchImages(
        this.state.query,
        this.state.page
      );
      if (result.length === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({results: [...prevState.results, ...result],
        // isVisible
      }))
    } catch (error) {
      this.setState({error: error.message})
    } finally {
      this.setState({ isLoading: false });
    }
  }

      onSubmit = value => {
        this.setState({ query: value, page: 1, images: [], error: null, isEmpty: false });
  }
  
  onLoadMore = () => (
    prevState => ({page: prevState.page +1 })
  )

  render() {
    return (
      <div> 
        <ImageGallery />
      </div>
    )
  }
}
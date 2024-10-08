import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useSelector, useDispatch } from "react-redux";
import { deleteCanceledItem, resetCancellations } from "../store/cancellationSlice"; // Adjust the path as necessary
import { toast } from "react-toastify";
import '../style/CancellationOrder.css'; // Custom styles for the cancellation page

const CancellationOrder = () => {
  const canceledItems = useSelector((state) => state.cancellation.canceledItems); // Fetch canceled items from Redux state
  const totalRefund = useSelector((state) => state.cancellation.totalRefund); // Fetch total refund
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to top when loaded
  }, []);

  // Handle deletion of individual canceled item
  const handleDeleteCanceledItem = (id) => {
    dispatch(deleteCanceledItem(id));
    toast.success("Canceled item removed!");
  };

  // Handle resetting all cancellations
  const handleClearCancellations = () => {
    dispatch(resetCancellations());
    toast.info("All cancellations cleared.");
  };

  return (
    <section className="cancellation-order">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>My Cancellations</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          {/* If there are no canceled items */}
          {canceledItems.length === 0 ? (
            <h1 className="text-center cancellation_title">No cancellations yet</h1>
          ) : (
            <>
              <Col lg="8">
                <div className="cancellation_box">
                  <div className="details_cancellation">
                    {canceledItems.map((item) => (
                      <div className="cancellation_item" key={item.id}>
                        <div className="info">
                          <img src={item.image} alt={item.title} />
                          <h2>{item.title}</h2>
                          <p>Canceled on: {item.dateCanceled}</p>
                        </div>
                        <span>Refund Amount: ${item.refundAmount}</span>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteCanceledItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>

              {/* Total refund summary */}
              <Col lg="4">
                <div className="refund-summary">
                  <h4>Total Refund:</h4>
                  <span className="refund-amount">${totalRefund}</span>
                  <button
                    className="clear-btn"
                    onClick={handleClearCancellations}
                  >
                    Clear All Cancellations
                  </button>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default CancellationOrder;

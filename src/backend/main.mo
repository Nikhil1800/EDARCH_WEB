import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Order "mo:core/Order";

actor {
  type Message = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Message {
    public func compare(message1 : Message, message2 : Message) : Order.Order {
      Int.compare(message2.timestamp, message1.timestamp);
    };
  };

  module Key {
    public func compare(key1 : (Time.Time, Text), key2 : (Time.Time, Text)) : Order.Order {
      switch (Int.compare(key1.0, key2.0)) {
        case (#equal) { Text.compare(key1.1, key2.1) };
        case (other) { other };
      };
    };
  };

  let messages = Map.empty<(Time.Time, Text), Message>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, subject : Text, message : Text) : async () {
    let timestamp = Time.now();
    let msg : Message = {
      name;
      email;
      subject;
      message;
      timestamp;
    };
    messages.add((timestamp, email), msg);
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray().sort(); // sort in descending order
  };

  public query ({ caller }) func getMessage(timestamp : Time.Time, email : Text) : async ?Message {
    messages.get((timestamp, email));
  };

  public query ({ caller }) func getMessagesByEmail(email : Text) : async [Message] {
    messages.values().toArray().sort().filter(
      func(msg) {
        msg.email == email;
      }
    );
  };
};
